import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import BidCalculation from '../BidCalculation.vue'

describe('Bid Calculation', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('renders properly', () => {
        const wrapper = mount(BidCalculation)
        expect(wrapper.find('#vechicle-base-price-label').text()).toEqual('Vehicle Base Price')
        expect(wrapper.find('#vehicle-type-label').text()).toEqual('Vehicle Type')
    })
})