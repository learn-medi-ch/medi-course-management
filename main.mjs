import FluxGatewayApi from "./libs/gateway/src/Adapters/Api/FluxGatewayApi.mjs";
import FluxLayoutApi from "./libs/layout/src/Adapters/Api/FluxLayoutApi.mjs";
import FluxRepositoryApi from "./libs/repository/src/Adapters/Api/FluxRepositoryApi.mjs";
const applicationName = "medi-course-management"

const backendBaseUrl = window.location + "dev-backend";

const repositoryDefinitionsBaseUrl = window.location + "/libs/repository/definitions";
const repository = await FluxRepositoryApi.initializeOfflineFirstRepository(
    {
        applicationName: applicationName,
        logEnabled: true,
        definitionsBaseUrl: repositoryDefinitionsBaseUrl,
        projectionApiBaseUrl: backendBaseUrl
    },
);


const layoutDefinitionsBaseUrl = window.location + "/libs/layout/definitions";
const layout = await FluxLayoutApi.initialize(
    {
        applicationName: applicationName,
        logEnabled: true,
        definitionsBaseUrl: layoutDefinitionsBaseUrl,
    },
);


const gatewayDefinitionsBaseUrl = window.location + "definitions";
const gateway = await FluxGatewayApi.initialize(
    {
        applicationName: applicationName,
        logEnabled: true,
        definitionsBaseUrl: gatewayDefinitionsBaseUrl,
    },
);

await layout.initActor();
await gateway.initActor();
await repository.initActor();

