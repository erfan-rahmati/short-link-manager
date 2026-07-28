export type CreateLinkActionState = {
  success: boolean;

  message?: string;

  errors: {
    destinationUrl?: string[];
    slug?: string[];
    title?: string[];
    general?: string[];
  };

  link: {
    id: string;
    userId: string;
    slug: string;
    destinationUrl: string;
    title: string | null;
    clickCount: number;
    isActive: boolean;
    expiresAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
  } | null;
};