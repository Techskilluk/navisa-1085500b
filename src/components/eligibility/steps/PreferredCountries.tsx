import { UseFormReturn } from "react-hook-form";
import { EligibilityData } from "../EligibilityForm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PreferredCountriesProps {
  form: UseFormReturn<EligibilityData>;
}

const AVAILABLE_COUNTRIES = [
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Japan",
  "Singapore",
  "New Zealand",
];

const PreferredCountries = ({ form }: PreferredCountriesProps) => {
  const preferredCountries = form.watch("preferredCountries") || [];

  const addCountry = (country: string) => {
    if (!preferredCountries.includes(country)) {
      form.setValue("preferredCountries", [...preferredCountries, country]);
    }
  };

  const removeCountry = (countryToRemove: string) => {
    form.setValue(
      "preferredCountries",
      preferredCountries.filter((country) => country !== countryToRemove)
    );
  };

  const availableCountries = AVAILABLE_COUNTRIES.filter(
    (country) => !preferredCountries.includes(country)
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Preferred Countries</h2>
        <p className="text-muted-foreground">Select countries where you'd like to work.</p>
      </div>

      <div className="space-y-4">
        <Select onValueChange={addCountry}>
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            {availableCountries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex flex-wrap gap-2">
          {preferredCountries.map((country, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-secondary px-3 py-1 rounded-full"
            >
              <span>{country}</span>
              <button
                type="button"
                onClick={() => removeCountry(country)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreferredCountries;