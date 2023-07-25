import { Role } from '../enums/Role';

export interface MemberType {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  workingSpaceId: string;
  role: Role;
}
