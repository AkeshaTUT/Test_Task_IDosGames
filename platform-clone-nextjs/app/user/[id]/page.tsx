import UserDetailClient from '@/components/UserDetailClient';

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return <UserDetailClient id={params.id} />;
} 