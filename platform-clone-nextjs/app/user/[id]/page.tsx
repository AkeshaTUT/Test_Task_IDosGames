import UserDetailClient from '@/components/UserDetailClient';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];
}

type UserPageProps = {
  params: { id: string };
};

export default function Page({ params }: UserPageProps) {
  return <UserDetailClient id={params.id} />;
} 