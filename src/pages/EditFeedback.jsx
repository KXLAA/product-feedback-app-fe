/* eslint-disable react/prop-types */
import React from 'react';
import EditForm from '../components/feedbackForm/EditForm';
import { Layout } from '../components/feedbackForm/Common';

export default function EditFeedback({
  showEditPage,
  setShowEditPage,
  data,
  setData,
  handleChange,
  handleEditFeedback,
  handleDelete,
}) {
  return (
    <Layout>
      <EditForm
        showEditPage={showEditPage}
        setShowEditPage={setShowEditPage}
        data={data}
        setData={setData}
        handleChange={handleChange}
        handleEditFeedback={handleEditFeedback}
        handleDelete={handleDelete}
      />
    </Layout>
  );
}
