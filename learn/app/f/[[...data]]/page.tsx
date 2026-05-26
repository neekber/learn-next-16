interface Props{
  params: {
    data: string[],
  }
}

const FilterData = async ({ params }: Props) => {
  let { data } = await params;

  return (
    <div>
      <h1>Filter Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FilterData;