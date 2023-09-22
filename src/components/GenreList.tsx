import { Text, VStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <VStack>
      {data.map((genre) => (
        <Text key={genre.name}>{genre.name}</Text>
      ))}
    </VStack>
  );
};

export default GenreList;
