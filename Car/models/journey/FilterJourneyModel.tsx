import FeeType from "./FeeType";

interface FilterJourneyModel{
    fromLatitude: number,
    fromLongitude: number,
    toLatitude: number,
    toLongitude: number,
    departureTime: Date,
    hasLuggage: boolean,
    fee: FeeType,
    passengersCount: number
}

export default FilterJourneyModel;
