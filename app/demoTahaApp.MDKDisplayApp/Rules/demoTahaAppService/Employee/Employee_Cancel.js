export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/MDKDisplayApp/Services/demoTahaAppService.service').isDraftEnabled('Employee')) {
        return clientAPI.executeAction({
            'Name': '/MDKDisplayApp/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Employee'
                },
                'OnSuccess': '/MDKDisplayApp/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MDKDisplayApp/Actions/CloseModalPage_Cancel.action');
    }
}