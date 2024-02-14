import { Skeleton } from "@/components/ui/skeleton";

export const Participants = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-e-md p-3 items-center shadow-md">
      List of users
    </div>
  );
};

Participants.Skeleton = function Participants() {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-e-md p-3 items-center shadow-md w-[100px]" />
  );
};
