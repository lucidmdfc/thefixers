import {
  DocumentData,
  FirestoreDataConverter,
  getFirestore,
  query,
  collection,
  addDoc,
  doc,
  updateDoc,
  Firestore,
  CollectionReference,
  DocumentReference,
} from 'firebase/firestore';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  getMetadata,
  FirebaseStorage,
} from 'firebase/storage';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { firebaseConfig } from 'src/config';
import { User } from './user-interface';

class FirebaseUsers {
  private firebaseApp: FirebaseApp;
  private firestore: Firestore;
  private usersCollection: CollectionReference<User>;
  private storage: ReturnType<typeof getStorage>;

  constructor() {
    this.firebaseApp = initializeApp(firebaseConfig);
    this.firestore = getFirestore(this.firebaseApp);
    this.usersCollection = collection(this.firestore, 'users') as CollectionReference<User>;
    this.storage = getStorage(this.firebaseApp);
  }

  async createUser(newUser: User): Promise<void> {
    try {
      await addDoc(this.usersCollection, newUser);
    } catch (error) {
      console.error('Error adding new user: ', error);
      throw error;
    }
  }

  async ensureUserFolderExists(storage: FirebaseStorage, userName: string) {
    const userFolderRef = ref(storage, `users/${userName}`);

    try {
      // Check if the folder exists
      await getMetadata(userFolderRef);
    } catch (error) {
      // If the folder does not exist, create it
      if (error.code === 'storage/object-not-found') {
        await uploadBytes(userFolderRef, new Uint8Array(0));
      } else {
        throw error;
      }
    }
  }

  async uploadFiles(userName: string, files: File[]): Promise<void> {
    try {
      // Ensure the user folder exists, create it if not
      await this.ensureUserFolderExists(this.storage, userName);

      const uploadPromises = files?.map(async (file) => {
        if (!file.name) {
          console.error('Error: File name is undefined or empty.');
          return;
        }

        // Concatenate the user folder and file name
        const fileName = userName.concat('/', file.name).replaceAll(' ', '_').trim();
        const storageRef = ref(this.storage, `files/${fileName}`);

        try {
          await uploadBytes(storageRef, file);
          console.log(`File ${file.name} uploaded successfully to user folder ${userName}`);
        } catch (error) {
          console.error(`Error uploading file ${file.name}:`, error.message);
          throw error;
        }
      });

      // Use Promise.all to wait for all promises to resolve
      await Promise.all(uploadPromises);

      // Update any other logic or data as needed
      console.log(`All files uploaded successfully to user folder ${userName}`);
    } catch (error) {
      console.error('Error uploading files:', error.message);
      throw error;
    }
  }
}

export default FirebaseUsers;
