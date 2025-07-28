export default function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MDKDisplayApp/Services/demoTahaAppService.service').isDraftEnabled('Employee')) {
        return clientAPI.executeAction({
            'Name': '/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/MDKDisplayApp/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Employee',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MDKDisplayApp/Actions/demoTahaAppService/Employee/Employee_CreateEntity.action');
    }
}