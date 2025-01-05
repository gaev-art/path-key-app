import { Title } from '@/components/shared/title';

const Dashboard = () => {
  return (
    <div className="flex max-w-3xl flex-col gap-2 mx-auto w-full md:max-w-5xl px-6 py-8">
      <Title
        text="Dashboard"
        size="2xl"
        className="text-[28px] leading-[34px] tracking-[-0.416px] text-[#000509e3] dark:text-inherit font-extrabold text-center"
      />
    </div>
  );
};

export default Dashboard;
