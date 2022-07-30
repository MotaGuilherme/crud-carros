import { Document } from 'mongoose';

export class Cars extends Document {
  name: string;
  rented: string;
}
