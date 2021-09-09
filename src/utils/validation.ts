import { NotesOwner, NotesRequestPayload } from '../types';
import { z } from 'zod';

const schemaValidation = {
  validateNotesSchema: (data: NotesRequestPayload) => {
    const notesSchema = z.object({
      title: z.string().nonempty(),
      owner_id: z.number().nonnegative(),
      description: z.string().nonempty(),
      creationDate: z.string().nonempty(),
      modificationDate: z.string().nonempty()
    });
    notesSchema.parse(data);
  },

  validateOwnerSchema: (owner: NotesOwner) => {
    const notesOwnerSchema = z.object({
      firstName: z.string().nonempty(),
      lastName: z.string().nonempty(),
      dob: z.string().nonempty(),
      createdAt: z.date()
    });

    notesOwnerSchema.parse(owner);
  }
};

export default schemaValidation;
