import { supabase } from "@/integrations/supabase/client";

export async function uploadDocumentToStorage(
  userId: string,
  visaType: string,
  docType: string,
  file: File
): Promise<string> {
  const filePath = `${userId}/${visaType}/${docType}-${Date.now()}`;
  console.log(`Uploading ${docType} to ${filePath}`);

  const { error: uploadError } = await supabase.storage
    .from("documents")
    .upload(filePath, file);

  if (uploadError) {
    console.error(`Error uploading ${docType}:`, uploadError);
    throw new Error(`Failed to upload ${docType}`);
  }

  return filePath;
}

export async function createDocumentRecord(
  userId: string,
  docType: string,
  filePath: string
): Promise<void> {
  const { error: insertError } = await supabase
    .from("documents")
    .insert([
      {
        user_id: userId,
        document_type: docType,
        file_path: filePath,
        status: "pending",
      },
    ]);

  if (insertError) {
    console.error(`Error creating document record for ${docType}:`, insertError);
    throw new Error(`Failed to create document record for ${docType}`);
  }
}