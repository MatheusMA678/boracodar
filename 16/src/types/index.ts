type ContactsListTypes = {
  letter: string;
  data: UserTypes[];
};

export interface UserTypes {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  image: string;
}

export interface DataTypes {
  users: UserTypes[];
}

export interface GroupedUsers {
  [key: string]: UserTypes[];
}
[];

export interface ContactsListProps {
  contactGroups: ContactsListTypes[];
}

export interface HeaderProps {
  inputValue: string;
  onInputChange: (text: string) => void;
}

export interface UserProps {
  name?: string;
  phone?: string;
  avatar?: string;
}
