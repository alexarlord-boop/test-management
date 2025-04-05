  interface Project {
    id: string;
    name: string;
    shortName: string;
    createdBy: { login: string; name: string; id: string };
    leader: { login: string; name: string; id: string };
    iconUrl: string;
    key: string;
  }

  interface FlagResponse {
    flag: boolean;
}

  export type { Project };
  export type { FlagResponse };