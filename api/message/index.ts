import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    
        context.res.json({
            text: "Hello from the API"
        });

};

export default httpTrigger;