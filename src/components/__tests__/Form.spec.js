import { setActivePinia, createPinia } from 'pinia'
import fetch from 'node-fetch'
import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import Form from '../Form/Form.vue'
import { prices } from './fixtures/prices'

describe('Form functions',() => {
    beforeEach(() => {
        setActivePinia(createPinia())
        global.fetch = fetch
    })

    it('should display the vehicle price information', async () => {
        const wrapper = mount(Form)
        const vehiclePriceInput = wrapper.find('#vehicle-price-input');
        await vehiclePriceInput.setValue("398.00")
        expect(wrapper.find('#vehicle-price-input').element.value).toBe("398.00")

        await new Promise((resolve) => setTimeout(resolve, 500))

        const vehicleTypeSelect = wrapper.find('#vehicle-type-select')
        await vehicleTypeSelect.setValue("1")
        expect(wrapper.find('#vehicle-type-select').element.value).toBe("1")

        await new Promise((resolve) => setTimeout(resolve, 500))

        expect(wrapper.find("#vehicle-base-price").text()).toEqual("398");
        expect(wrapper.find("#vehicle-type").text()).toEqual("Common");
        expect(wrapper.find("#total-fees").text()).toEqual("152.76");
        expect(wrapper.find("#total").text()).toEqual("550.76");
    })

    prices.forEach((data, index) => {
        it(`should show the correct prices for the case ${index + 1}`, async () => {
            const wrapper = mount(Form)
            const vehiclePriceInput = wrapper.find('#vehicle-price-input');
            await vehiclePriceInput.setValue(data.vehicleBasePrice)
            expect(wrapper.find('#vehicle-price-input').element.value).toBe(data.vehicleBasePrice)

            await new Promise((resolve) => setTimeout(resolve, 500))

            const vehicleTypeSelect = wrapper.find('#vehicle-type-select')
            await vehicleTypeSelect.setValue(data.vehicleType)
            expect(wrapper.find('#vehicle-type-select').element.value).toBe(data.vehicleType)

            await new Promise((result) => setTimeout(result, 500))

            expect(wrapper.find("#vehicle-base-price").text()).toEqual(data.vehicleBasePrice);
            expect(wrapper.find("#vehicle-type").text()).toEqual(data.vehicleType === "1" ? "Common" : "Luxury");
            expect(wrapper.find("#Basic").text()).toEqual(data.basic);
            expect(wrapper.find("#Special").text()).toEqual(data.special);
            expect(wrapper.find("#Association").text()).toEqual(data.association);
            expect(wrapper.find("#Storage").text()).toEqual(data.storage);
            expect(wrapper.find("#total").text()).toEqual(data.total);
        })
    })
})
