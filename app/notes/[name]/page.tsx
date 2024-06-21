import NoteCard from "@/app/notes/[name]/NoteCard";

const Notes = ({ params }: { params: { name: string } }) => {
  const arr = [1, 5, 6, 8, 5, 32, 5];
  return (
    <div className="p-8 pl-12 w-full space-y-8">
      <h1 className="flex justify-center w-full text-3xl font-medium">
        {params.name}
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {arr.map((item) => (
          <NoteCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
