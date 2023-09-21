import { Text, VStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <VStack>
      {genres.map((genre) => (
        <Text>{genre.name}</Text>
      ))}
    </VStack>
  );
};

export default GenreList;
