import { urlAddress } from '../constants/urlAndress';
import { AddressData } from "../constants/types";
import axios from "axios";

export async function getAddressFromCEP(
    cep: number
    ): Promise<AddressData> {

        const getAddress = await axios.get(`${urlAddress}/${cep}/json`)

        return {
            logradouro: getAddress.data.logradouro,
            bairro: getAddress.data.bairro,
            cidade: getAddress.data.cidade,
            estado: getAddress.data.cidade
        }
}