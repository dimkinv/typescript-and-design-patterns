function getHttpClient() {
    const httpClient = new HttpClient()
    return httpClient;
}

class HttpClient {

}

// -------------------------------------------

interface TransportClient { send(): void }
class HttpTransportClient implements TransportClient { send() { } }
class TcpTransportClient implements TransportClient { send() { } }

enum TransportClientType { HTTP, TCP }
const transports = new Map<TransportClientType, Constructor<TransportClient>>();
transports.set(TransportClientType.HTTP, HttpTransportClient);
transports.set(TransportClientType.TCP, TcpTransportClient);

function getTransportClient(transportClientType: TransportClientType): TransportClient | null {
    const TransportConstructor = transports.get(transportClientType);
    if(!TransportConstructor) {
        return null
    }
    
    const transport = new TransportConstructor();
    // add more configurations here
    return transport;
}

// -------------------------------------------
