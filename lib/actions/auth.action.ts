'use server';

import { auth } from "../better-auth/auth";
import { inngest } from "../inngest/client";

export const signUpWithEmail = async ({ email, password, fullName, country, investmentGoals, riskTolerance, preferredIndustry }: SignUpFormData) => {
    // Your actual sign-up logic here
    try {
        const response = await auth.api.signUpEmail({body:{email, password, name: fullName} });
        if (response) {
            await inngest.send({
                name: 'app/user.created',
                data: { email, fullName, country, investmentGoals, riskTolerance, preferredIndustry }
            });
        }
        return { success: true, data: response };
    } catch (error) {
        console.log('Error during sign-up:', error);
        return { success: false, error };
    }
};


export const signInWithEmail = async ({ email, password }: SignInFormData) => {
    // Your actual sign-in logic here
    try {
        const response = await auth.api.signInEmail({body:{ email, password} });
        return { success: true, data: response };
    } catch (error) {
        console.log('Error during sign-in:', error);
        return { success: false, error };
    }
};