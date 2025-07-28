export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MDKDisplayApp/Services/demoTahaAppService.service').isDraftEnabled('Employee')) {
        return clientAPI.executeAction({
            'Name': '/MDKDisplayApp/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Employee'
                },
                'OnSuccess': '/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MDKDisplayApp/Actions/demoTahaAppService/Employee/NavToEmployee_Edit.action');
    }
}