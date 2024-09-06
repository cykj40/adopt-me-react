const fetchBreedList = async ({ queryKey }) => {
    const animal = queryKey[1];

    const apiRes = await fetch(`https://api.petfinder.com/v2/types/${animal}`);

    if (!apiRes.ok) {
        throw new Error("An error occurred while fetching the data.");
    }

    return apiRes.json();
};

export default fetchBreedList;