// title, description, creation date, modification date and owner

export interface NotesOwner {
  firstName: string;
  lastName: string;
  dob: string;
  createdAt: string;
}

export interface NotesPayload {
  title: string;
  description: string;
  creationDate: string;
  modificationDate: string;
}

export interface NotesRequestPayload extends NotesPayload {
  ownerId: number;
}

export interface NotesResponsePayload extends NotesPayload {
  owner: NotesOwner;
}
