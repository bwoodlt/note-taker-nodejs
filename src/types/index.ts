// title, description, creation date, modification date and owner

export interface NotesOwner {
  firstName: string;
  lastName: string;
  dob: Date;
  createdAt: Date;
}

export interface NotesPayload {
  title: string;
  description: string;
  creationDate: Date;
  modificationDate: Date;
}

export interface NotesRequestPayload extends NotesPayload {
  ownerId: number;
}

export interface NotesResponsePayload extends NotesPayload {
  owner: NotesOwner;
}
