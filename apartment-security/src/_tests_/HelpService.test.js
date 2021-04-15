import HelpService from '../services/HelpService';
const axios = require('axios');
jest.mock('axios');
describe("testing Help service", () => {
    test("mocking get end point", () => {
    
    const mockedResponse={data:{person_name:'Mahesh'}};
    axios.get.mockResolvedValue(mockedResponse)
    
   
    HelpService.getHelp();
 
    expect(axios.get).toHaveBeenCalled()
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8082/springfox/api/owner/domesticHelp')
})

})