import React, { useContext } from 'react';
import { FormProvider, useForm } from '../../context/form-context';
import FormRenderer from '../../components/form-renderer';
import FieldPreview from '../../components/field-preview';
import FieldEditor from '../../components/field-editor';

const InnerMainSection = () => {
    const { fields } = useForm();

    return (
        <div className="w-full p-6 overflow-y-auto rounded-2xlr">
            <FieldEditor />
            {fields.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Form Detail</h3>
                    <div className="space-y-4">
                        <FieldPreview />
                    </div>
                </div>
            )}
        </div>
    );
};

const MainSection = () => (
    <FormProvider>
        <InnerMainSection />
    </FormProvider>
);

export default MainSection;
