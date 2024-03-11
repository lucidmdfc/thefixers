import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import XIcon from '@untitled-ui/icons-react/build/esm/X';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import { File, FileDropzone } from 'src/components/file-dropzone';

interface FileUploaderProps {
  onClose?: () => void;
  open?: boolean;
  onSelectFiles: (files: File[]) => void; // Update prop name and type
}

export const FileUploader: FC<FileUploaderProps> = (props) => {
  const { onClose, open = false, onSelectFiles } = props;
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    setFiles([]);
  }, [open]);

  const handleDrop = useCallback(
    (newFiles: File[]): void => {
      setFiles((prevFiles) => {
        const updatedFiles = [...prevFiles, ...newFiles];
        onSelectFiles(updatedFiles); // Select the first file (you may modify this logic)
        return updatedFiles;
      });
    },
    [onSelectFiles]
  );

  const handleRemove = useCallback(
    (file: File): void => {
      setFiles((prevFiles) => {
        const updatedFiles = prevFiles.filter((_file) => _file.path !== file.path);
        onSelectFiles(updatedFiles); // Update the prop callback
        return updatedFiles;
      });
    },
    [onSelectFiles]
  );

  const handleRemoveAll = useCallback((): void => {
    setFiles([]);
    onSelectFiles([]); // Update the prop callback
  }, [onSelectFiles]);
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={() => {
        onClose?.();
        handleRemoveAll();
      }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={3}
        sx={{
          px: 3,
          py: 2,
        }}
      >
        <Typography variant="h6">Télécharger des fichiers</Typography>
        <IconButton
          color="inherit"
          onClick={() => {
            onClose?.();
            handleRemoveAll();
          }}
        >
          <SvgIcon>
            <XIcon />
          </SvgIcon>
        </IconButton>
      </Stack>
      <DialogContent>
        <FileDropzone
          caption="La taille maximale du fichier est de 3 Mo"
          files={files}
          onDrop={handleDrop}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
          onUpload={onClose}
        />
      </DialogContent>
    </Dialog>
  );
};

FileUploader.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  onSelectFiles: PropTypes.func.isRequired, // Update prop type
};
