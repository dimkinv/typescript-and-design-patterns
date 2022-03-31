export interface EncryptionAlgorithm {
    encrypt:(message: string) => string;
}