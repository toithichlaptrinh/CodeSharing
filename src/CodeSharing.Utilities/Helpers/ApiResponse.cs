using Newtonsoft.Json;

namespace CodeSharing.Utilities.Helpers;

public class ApiResponse
{
    public ApiResponse(int statusCode, string? message = null)
    {
        StatusCode = statusCode;
        Message = message ?? GetDefaultMessageForStatusCode(statusCode);
    }

    public int StatusCode { get; set; }

    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string Message { get; set; }

    private static string GetDefaultMessageForStatusCode(int statusCode)
    {
        return statusCode switch
        {
            401 => "Unauthorized",
            404 => "Resource not found",
            500 => "An unhandled error occured",
            _ => null
        } ?? string.Empty;
    }
}