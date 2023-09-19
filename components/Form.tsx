import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  RadioGroup,
  Input,
  Radio,
  Textarea,
  Button,
} from '@chakra-ui/react';

interface FormProps {
  onOpen: () => void;
  setHamburguerName: React.Dispatch<React.SetStateAction<string>>;
  setHamburguerDescription: React.Dispatch<React.SetStateAction<string>>;
}

export default function Form({ onOpen, setHamburguerName, setHamburguerDescription }: FormProps) {
  const [favoriteCuisine, setFavoriteCuisine] = useState<string>('Italian');
  const [favoriteHobbies, setFavoriteHobbies] = useState<string>('');
  const [selfDescription, setSelfDescription] = useState<string>('');
  const [isProcessingRequest, setIsProcessingRequest] = useState<boolean>(false);

  const handleHobbiesChange = (event: any) => setFavoriteHobbies(event.target.value);
  const handleDescriptionChange = (event: any) => setSelfDescription(event.target.value);

  const generativeAIHandler = async (e: any) => {
    e.preventDefault();

    setIsProcessingRequest(true);

    const response = await fetch('/.netlify/functions/create-chatgpt-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cuisine: favoriteCuisine,
        hobbies: favoriteHobbies,
        description: selfDescription,
      }),
    }).then(res => res.json());

    const generatedResponse = JSON.parse(response.content);
    setHamburguerName(generatedResponse.name);
    setHamburguerDescription(generatedResponse.description);
    setIsProcessingRequest(false);
    onOpen();
  };

  return (
    <form onSubmit={generativeAIHandler}>
      <FormControl as="fieldset" isRequired>
        <div>
          <FormLabel as="legend">Whats your favorite cuisine?</FormLabel>
          <RadioGroup
            defaultValue="Italian"
            value={favoriteCuisine}
            onChange={value => setFavoriteCuisine(value)}
          >
            <div className="grid lg:grid-cols-4 gap-4">
              <Radio value="Italian">Italian</Radio>
              <Radio value="Arabic">Arabic</Radio>
              <Radio value="French">French</Radio>
              <Radio value="Japanese">Japanese</Radio>
              <Radio value="Spanish">Spanish</Radio>
              <Radio value="Chinese">Chinese</Radio>
              <Radio value="American">American</Radio>
              <Radio value="Brazilian">Brazilian</Radio>
            </div>
          </RadioGroup>
        </div>
        <div className="mt-6">
          <FormLabel>Name 3 favorite hobbies:</FormLabel>
          <Textarea
            placeholder="E.g: Hike, travel and play board games"
            onChange={handleHobbiesChange}
            value={favoriteHobbies}
          />
        </div>
        <div className="mt-6">
          <FormLabel>Name one word to describe yourself:</FormLabel>
          <Input
            placeholder="E.g: Adventurous"
            value={selfDescription}
            onChange={handleDescriptionChange}
          />
          <FormHelperText>We'll never record your data.</FormHelperText>
        </div>
        <div className="mt-6 text-center">
          <Button colorScheme="orange" type="submit" isLoading={isProcessingRequest}>
            Click to generate your hamburguer!
          </Button>
        </div>
      </FormControl>
    </form>
  );
}
