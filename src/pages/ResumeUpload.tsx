import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function ResumeUpload() {
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            // Validate file type
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!allowedTypes.includes(selectedFile.type)) {
                setError('Please upload a PDF or Word document (.pdf, .doc, .docx)');
                return;
            }
            
            // Validate file size (5MB limit)
            if (selectedFile.size > 5 * 1024 * 1024) {
                setError('File size must be less than 5MB');
                return;
            }

            setFile(selectedFile);
            setError('');
            setUploadSuccess(false);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setError('Please select a file to upload');
            return;
        }

        setIsUploading(true);
        setError('');

        try {
            // Convert file to base64
            const reader = new FileReader();
            reader.onload = async () => {
                try {
                    const base64 = (reader.result as string).split(',')[1]; // Remove data:mime;base64, prefix
                    
                    const payload = {
                        Resume_file: base64,
                        fileName: file.name,
                        fileType: file.type,
                        fileSize: file.size
                    };

                    const response = await fetch(import.meta.env.VITE_RELAY_WEBHOOK_URL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(payload),
                    });

                    console.log('Response status:', response.status);
                    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

                    if (!response.ok) {
                        const errorText = await response.text();
                        console.error('Upload error response:', errorText);
                        throw new Error(`Upload failed with status: ${response.status} - ${errorText}`);
                    }

                    // Try to parse response as JSON, but handle plain text responses too
                    let data;
                    const contentType = response.headers.get('content-type');
                    if (contentType && contentType.includes('application/json')) {
                        data = await response.json();
                    } else {
                        data = await response.text();
                    }
                    
                    setUploadSuccess(true);
                    console.log('Upload successful:', data);
                } catch (err) {
                    console.error('Upload error:', err);
                    setError(err instanceof Error ? err.message : 'An error occurred during upload');
                } finally {
                    setIsUploading(false);
                }
            };

            reader.onerror = () => {
                setError('Failed to read file');
                setIsUploading(false);
            };

            reader.readAsDataURL(file);
        } catch (err) {
            console.error('Upload error:', err);
            setError(err instanceof Error ? err.message : 'An error occurred during upload');
            setIsUploading(false);
        }
    };

    const resetUpload = () => {
        setFile(null);
        setUploadSuccess(false);
        setError('');
        // Reset file input
        const fileInput = document.getElementById('resume') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-background">
            <Card className="w-full max-w-md text-foreground bg-card">
                <CardHeader className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Upload Your Resume</CardTitle>
                    <CardDescription>
                        Upload your resume and let our AI analyze your skills and find matching job opportunities
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {error && (
                        <div className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                            <AlertCircle className="h-4 w-4" />
                            {error}
                        </div>
                    )}

                    {uploadSuccess && (
                        <div className="flex items-center gap-2 p-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded-md">
                            <CheckCircle className="h-4 w-4" />
                            Resume uploaded successfully! Our AI is analyzing your profile.
                        </div>
                    )}

                    {!uploadSuccess && (
                        <>
                            <div className="space-y-2">
                                <Label htmlFor="resume">Choose Resume File</Label>
                                <Input
                                    id="resume"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="cursor-pointer"
                                />
                                <p className="text-xs text-muted-foreground">
                                    Supported formats: PDF, DOC, DOCX (Max size: 5MB)
                                </p>
                            </div>

                            {file && (
                                <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                                    <FileText className="h-4 w-4 text-primary" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{file.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {(file.size / 1024 / 1024).toFixed(2)} MB
                                        </p>
                                    </div>
                                </div>
                            )}

                            <Button 
                                onClick={handleUpload}
                                disabled={!file || isUploading}
                                className="w-full cursor-pointer"
                            >
                                {isUploading ? (
                                    <>
                                        <Upload className="mr-2 h-4 w-4 animate-spin" />
                                        Uploading...
                                    </>
                                ) : (
                                    <>
                                        <Upload className="mr-2 h-4 w-4" />
                                        Upload Resume
                                    </>
                                )}
                            </Button>
                        </>
                    )}

                    {uploadSuccess && (
                        <div className="space-y-2">
                            <Button 
                                onClick={resetUpload}
                                variant="outline"
                                className="w-full cursor-pointer"
                            >
                                Upload Another Resume
                            </Button>
                            <Button 
                                className="w-full cursor-pointer"
                                onClick={() => window.location.href = '/dashboard'}
                            >
                                Go to Dashboard
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
