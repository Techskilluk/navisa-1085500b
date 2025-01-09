export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      documents: {
        Row: {
          created_at: string
          document_type: string
          feedback: string | null
          file_path: string
          id: string
          status: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          document_type: string
          feedback?: string | null
          file_path: string
          id?: string
          status?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          document_type?: string
          feedback?: string | null
          file_path?: string
          id?: string
          status?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      eligibility_verifications: {
        Row: {
          created_at: string
          id: string
          is_guest: boolean | null
          status: string
          updated_at: string
          user_id: string | null
          verification_data: Json
        }
        Insert: {
          created_at?: string
          id?: string
          is_guest?: boolean | null
          status: string
          updated_at?: string
          user_id?: string | null
          verification_data: Json
        }
        Update: {
          created_at?: string
          id?: string
          is_guest?: boolean | null
          status?: string
          updated_at?: string
          user_id?: string | null
          verification_data?: Json
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          id: string
          updated_at: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          id: string
          updated_at?: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}