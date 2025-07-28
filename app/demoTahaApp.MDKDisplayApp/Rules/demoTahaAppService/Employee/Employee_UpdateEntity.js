export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MDKDisplayApp/Services/demoTahaAppService.service').isDraftEnabled('Employee')) {
        return clientAPI.executeAction({
            'Name': '/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MDKDisplayApp/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Employee'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_UpdateEntity.action');
    }
}