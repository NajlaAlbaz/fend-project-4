import { checkURL } from '../src/client/js/urlChecker'

describe("Testing the submit functionality", () => {
    test("Testing the checkURL(url) function", () => {
        const input ='https://www.url.com';
        const output = true;

        expect(checkURL(input)).toEqual(output);    
    })
});