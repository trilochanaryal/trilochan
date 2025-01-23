import Link from 'next/link';
import { CalendarIcon, ExternalLinkIcon } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/card';

interface PostCardProps {
  title: string;
  date: string;
  description?: string;
  link: string;
  isExternal?: boolean;
}

export function PostCard({
  title,
  date,
  description,
  link,
  isExternal = false,
}: PostCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow hover:shadow-md">
      <Link
        href={link}
        {...(isExternal
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        <CardHeader>
          <CardTitle className="flex items-start justify-between gap-2">
            <span className="line-clamp-2">{title}</span>
            {isExternal && (
              <ExternalLinkIcon className="w-4 h-4 flex-shrink-0 mt-1" />
            )}
          </CardTitle>
          <CardDescription className="flex items-center mt-2">
            <CalendarIcon className="w-4 h-4 mr-2" />
            {date}
          </CardDescription>
        </CardHeader>
        {description && (
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {description}
            </p>
          </CardContent>
        )}
      </Link>
    </Card>
  );
}
