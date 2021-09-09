import { NotesOwner, NotesPayload } from '../types';
import { z } from 'zod';

const schemaValidation = {
  validateNotesSchema: (data: NotesPayload) => {
    const notesSchema = z.object({
      title: z.string().nonempty(),
      owner_id: z.number().nonnegative(),
      description: z.string().nonempty(),
      creationDate: z.union([z.string().optional().nullable(), z.date().optional().nullable()]),
      modificationDate: z.union([z.string().optional().nullable(), z.date().optional().nullable()])
    });
    try {
      notesSchema.parse(data);
    } catch (error) {
      throw error;
    }
  },

  validateOwnerSchema: (owner: NotesOwner) => {
    const notesOwnerSchema = z.object({
      firstName: z.string().nonempty(),
      lastName: z.string().nonempty(),
      dob: z.string().nonempty(),
      createdAt: z.date()
    });

    try {
      notesOwnerSchema.parse(owner);
    } catch (error) {
      throw error;
    }
  }
};

export default schemaValidation;
