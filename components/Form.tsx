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

export default function Form() {
  return (
    <>
      <div>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mt-1 text-1xl font-bold uppercase text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl">
                Create unique hamburguers!!
              </p>
            </div>
            <div>
              <div className="mt-10">
                <FormControl as="fieldset" isRequired>
                  <div>
                    <FormLabel as="legend">Whats your favorite cuisine?</FormLabel>
                    <RadioGroup defaultValue="Italian">
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
                    <Textarea placeholder="E.g: Hike, travel and play board games" />
                  </div>
                  <div className="mt-6">
                    <FormLabel>Name one word to describe yourself:</FormLabel>
                    <Input placeholder="E.g: Adventurous" />
                    <FormHelperText>We'll never record your data.</FormHelperText>
                  </div>
                  <div className="mt-6 text-center">
                    <Button isDisabled colorScheme="orange">Click to generate your hamburguer!</Button>
                  </div>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
