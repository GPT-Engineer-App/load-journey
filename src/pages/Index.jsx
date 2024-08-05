import { useState } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const dogImages = [
  "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
];

const dogBreeds = [
  "Labrador Retriever", "German Shepherd", "Golden Retriever", "French Bulldog",
  "Bulldog", "Poodle", "Beagle", "Rottweiler", "Siberian Husky", "Dachshund"
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBreeds = dogBreeds.filter(breed =>
    breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center text-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover the World of Dogs
        </motion.h1>
        
        <Carousel className="mb-8">
          <CarouselContent>
            {dogImages.map((src, index) => (
              <CarouselItem key={index}>
                <img 
                  src={src}
                  alt={`Dog ${index + 1}`}
                  className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="mb-8 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">What are Dogs?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated. Today, they're beloved companions known for their loyalty and affection.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="mb-8 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Characteristics of Dogs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Loyal and affectionate companions</li>
                <li>Highly intelligent and trainable</li>
                <li>Come in a wide variety of breeds, sizes, and colors</li>
                <li>Have an excellent sense of smell and hearing</li>
                <li>Require regular exercise and mental stimulation</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Popular Dog Breeds</CardTitle>
              <CardDescription>Search and explore some of the most popular dog breeds worldwide:</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex mb-4">
                <Input
                  type="text"
                  placeholder="Search breeds..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="mr-2"
                />
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {filteredBreeds.map((breed, index) => (
                  <li key={index} className="text-gray-700">{breed}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
