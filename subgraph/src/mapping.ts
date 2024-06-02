import { Transfer } from './types/CovidVaccineToken/CovidVaccineToken'
import { Vaccinated } from './types/schema'


export function handleTransfer(event: Transfer): void {
    let vaccinated = Vaccinated.load(event.params.to.toHex())
    if (vaccinated === null) {
        vaccinated = new Vaccinated(event.params.to.toHex())
    }
    vaccinated.count += 1
    vaccinated.save()
}