const FilterData = async ({params}: { params: Promise<{data: []}> }) => {

    let {data} = await params;

    return (
      <div>
        <h1>Filter Data</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      );

}

export default FilterData;