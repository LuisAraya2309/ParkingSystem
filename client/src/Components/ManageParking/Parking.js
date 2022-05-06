function TECParking(parkingInfo) {

    this.name = parkingInfo.name
    this.type = parkingInfo.type
    this.schedule = {'opening_hour':parkingInfo.opening_hour,'closing_time':parkingInfo.closing_time,'weekends_enabled':parkingInfo.weekends_enabled}
    this.slotsAvailable = parkingInfo.slotsAvailable
    this.nonAvailability = parkingInfo.nonAvailability

}

function RentedParking(parkingInfo,contractInfo){

    this.name = parkingInfo.name
    this.type = parkingInfo.type
    this.location = parkingInfo.location
    this.schedule = {'opening_hour':parkingInfo.opening_hour,'closing_time':parkingInfo.closing_time,'weekends_enabled':parkingInfo.weekends_enabled}
    this.slotsAvailable = parkingInfo.slotsAvailable
    this.nonAvailability = parkingInfo.nonAvailability
    this.contract = contractInfo.url

}

 function ParkingFactory() {
    this.create = (parkingInfo,contractInfo) =>{
        switch (parkingInfo.type) {
            case 'Oficial':
                return new TECParking(parkingInfo)
        
            default:
                return new RentedParking(parkingInfo,contractInfo)
        }
    }
}

//eslint-disable-next-line
export default {ParkingFactory};
