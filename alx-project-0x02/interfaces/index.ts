export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface ButtonProps {
    className?: string;
   type: "button" | "submit" | "reset";
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";
    onClick?: () => void;
    children: React.ReactNode;
}

export interface PostProps{
    title: string;
    content: string;
    userId: number;
}