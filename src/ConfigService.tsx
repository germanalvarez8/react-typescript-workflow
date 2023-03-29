// import axios from 'axios';

interface Configuration {
    setting1: string;
    setting2: number;
    setting3: boolean;
}

export class ConfigService {
    async saveConfiguration(config: Configuration): Promise<void> {
        try {
            // const response = await axios.post('/api/config-service/save-configuration', config);
            // console.log('Configuration saved successfully:', response.data);
        } catch (error) {
            console.error('Failed to save configuration:', error);
        }
    }
}