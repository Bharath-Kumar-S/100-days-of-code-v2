export default async function Details(props: PageProps<"/details/[slotId]">) {
  const { slotId } = await props.params;
  const { name } = await props.searchParams;

  return (
    <div>
      {slotId} - {name}
      {process.env.API_URL}
    </div>
  );
}
