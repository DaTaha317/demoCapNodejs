// srv/employee-service.js
const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {

     // Get SuccessFactors destination
     const sfDestination = await cds.connect.to('successFactorsAPI');

     // Implement the custom action
    this.on('getUserInfo', async (req) => {
        const { userId } = req.data;
        
        if (!userId) {
            req.error(400, 'userId is required');
        }
        
        try {
            // Call SuccessFactors API to get employee data
            const sfResponse = await sfDestination.get(`/User('${userId}')`);
            
            if (!sfResponse) {
                req.error(404, `User with userId ${userId} not found`);
            }
            
            // Map SuccessFactors response to your Employee entity
            const mappedEmployee = mapSFToEmployee(sfResponse);
            
            return mappedEmployee;
            
        } catch (error) {
            console.error('Error fetching from SuccessFactors:', error);
            req.error(500, 'Error fetching user data from SuccessFactors');
        }
    });

    // Mapping function to transform SuccessFactors data to your Employee entity
    function mapSFToEmployee(sfData) {
        return {
            Name: sfData.displayName,
            Email: sfData.email
        };
    }
})