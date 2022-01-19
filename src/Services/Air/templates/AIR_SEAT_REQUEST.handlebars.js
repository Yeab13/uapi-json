module.exports = `
<soapenv:Envelope
xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
<soapenv:Header/>
<soapenv:Body>
  <air:SeatMapReq
      xmlns:air="http://www.travelport.com/schema/air_v47_0" AuthorizedBy="user" ReturnSeatPricing="true" TargetBranch="P3543563" TraceId="trace">
      <com:BillingPointOfSaleInfo
          xmlns:com="http://www.travelport.com/schema/common_v47_0" OriginApplication="UAPI"/>
          
            {{#each seatSegment}}
                <air:AirSegment Key="{{uapi_segment_ref}}" Group="{{group}}" ClassOfService="{{bookingClass}}" ProviderCode="1G" Carrier="{{airline}}" FlightNumber="{{flightNumber}}" Origin="{{from}}" Destination="{{to}}" DepartureTime="{{departure}}">
                        <air:AirAvailInfo ProviderCode="1G"/>        
                </air:AirSegment>
            {{/each}}

          <com:HostToken
              xmlns:com="http://www.travelport.com/schema/common_v47_0" Key="iMOOy7csTMicfoORyLVozA==">
                H4sIAAAAAAAAAFvzloG1hIHVzy/YLQgAVBt8CQwAAAA={IS@@@}H4sIAAAAAAAAAFvzloG1hIHZ3SkAAD3MWJcKAAAA{CC@@@ET}rO0ABXNyAFBjb20udHJhdmVscG9ydC5nYWxpbGVvLnNlcnZpY2VzLmFjaC5haXJjb21tb25hcGkuZGF0YW9iamVjdHMuc2Vzc2lvbi5TZXNzaW9uRGF0YQAAAAAAABAAAgAMWgAKcHJpY2VkSXRpbkwAC2FkYXB0ZXJDb2RldAASTGphdmEvbGFuZy9TdHJpbmc7TAAPYXBpc1JlcXVpcmVtZW50dABbTGNvbS90cmF2ZWxwb3J0L2dhbGlsZW8vc2VydmljZXMvYWNoL2FpcmNvbW1vbmFwaS9kYXRhb2JqZWN0cy9zZXNzaW9uL2FwaXMvQVBJU1JlcXVpcmVtZW50O0wAEmJyYW5kZWRGYXJlU2Vzc2lvbnQAW0xjb20vdHJhdmVscG9ydC9nYWxpbGVvL3NlcnZpY2VzL2FjaC9haXJjb21tb25hcGkvZGF0YW9iamVjdHMvc2Vzc2lvbi9CcmFuZGVkRmFyZVNlc3Npb25ETztMAAxjdXJyZW5jeUNvZGVxAH4AAUwAE2ZsaWdodFBhc3NFY2hvVG9rZW5xAH4AAUwADnBhc3NlbmdlckZhcmVzdAAPTGphdmEvdXRpbC9NYXA7TAAicGFzc2VuZ2VyU2VnbWVudFNlc3Npb25JbmZvcm1hdGlvbnEAfgAETAAec2F2ZWRTZWdtZW50U2Vzc2lvbkluZm9ybWF0aW9ucQB+AAFMABlzZWdtZW50U2Vzc2lvbkluZm9ybWF0aW9ucQB+AAFMACBzZWdtZW50VXBncmFkZVNlc3Npb25JbmZvcm1hdGlvbnEAfgAETAARdmVuZG9yU2Vzc2lvbkRhdGF0AFhMY29tL3RyYXZlbHBvcnQvZ2FsaWxlby9zZXJ2aWNlcy9hY2gvYWlyY29tbW9uYXBpL2RhdGFvYmplY3RzL3Nlc3Npb24vVmVuZG9yU2Vzc2lvbkRhdGE7eHAAdAAFTk5TRlJwcHQAA0dCUHBwcHBwcHNyAHBjb20uY2VuZGFudC50ZHMuc2VydmljZXMuYWNoLmFpcmNvbW1vbmFwaS5hZGFwdGVyLm5ld3NraWVzMzR4LmRhdGFvYmplY3RzLnNlc3Npb25kYXRhLk5ld1NraWVzU2Vzc2lvbkRhdGFNYXBwaW5nNOkYINNwJtACAANMAAthZGFwdGVyQ29kZXEAfgABTAAMc2Vzc2lvbkRhdGFzdAAQTGphdmEvdXRpbC9MaXN0O0wACXNpZ25hdHVyZXEAfgABeHBxAH4AB3NyABNqYXZhLnV0aWwuQXJyYXlMaXN0eIHSHZnHYZ0DAAFJAARzaXpleHAAAAABdwQAAAABc3IAaWNvbS5jZW5kYW50LnRkcy5zZXJ2aWNlcy5hY2guYWlyY29tbW9uYXBpLmFkYXB0ZXIubmV3c2tpZXMzNHguZGF0YW9iamVjdHMuc2Vzc2lvbmRhdGEuTmV3U2tpZXNTZXNzaW9uRGF0YUiryQ1velEOAgAETAAXbmV3U2tpZXNTZXNzaW9uU2VhdEluZm90AG9MY29tL2NlbmRhbnQvdGRzL3NlcnZpY2VzL2FjaC9haXJjb21tb25hcGkvYWRhcHRlci9uZXdza2llczM0eC9kYXRhb2JqZWN0cy9zZXNzaW9uZGF0YS9OZXdTa2llc1Nlc3Npb25TZWF0SW5mbztMABRubnNTZXNzaW9uRmxpZ2h0SW5mb3QAcUxjb20vY2VuZGFudC90ZHMvc2VydmljZXMvYWNoL2FpcmNvbW1vbmFwaS9hZGFwdGVyL25ld3NraWVzMzR4L2RhdGFvYmplY3RzL3Nlc3Npb25kYXRhL05ld1NraWVzU2Vzc2lvbkZsaWdodEluZm87TAAMb2RGbGlnaHRJbmZvcQB+AApMAAhzZWF0TWFza3EAfgABeHBwc3IAb2NvbS5jZW5kYW50LnRkcy5zZXJ2aWNlcy5hY2guYWlyY29tbW9uYXBpLmFkYXB0ZXIubmV3c2tpZXMzNHguZGF0YW9iamVjdHMuc2Vzc2lvbmRhdGEuTmV3U2tpZXNTZXNzaW9uRmxpZ2h0SW5mb1LubC3DZJPBAgAaRAAPY2FuY2VsVG90YWxDb3N0SQAMZmFyZVNlcXVlbmNlWgANaXNDbGVhckNhbGxlZFoADWlzU2VnbWVudFNvbGRaABlpc1ZhbGlkYXRpb25EQ0NBcHBsaWNhYmxlTAAGQ0NDRmVldAASTGphdmEvbGFuZy9Eb3VibGU7TAAOYXJyaXZhbEFpcnBvcnRxAH4AAUwAD2Fycml2YWxEYXRlVGltZXEAfgABTAAOYm9va2luZ0ZlZUNvZGVxAH4AAUwADmNsYXNzT2ZTZXJ2aWNlcQB+AAFMABVjb25uZWN0aW9uRmFyZVNlbGxLZXlxAH4AAUwAEmRjY1BheW1lbnRSZXNwb25zZXQAbExjb20vY2VuZGFudC90ZHMvc2VydmljZXMvYWNoL2FpcmNvbW1vbmFwaS9kYXRhb2JqZWN0cy9zaGFyZWQvbmV3c2tpZXMzNHgvcmVqZWN0ZGNjb2ZmZXIvRENDUGF5bWVudFJlc3BvbnNlO0wAEWRlcGFydHVyZURhdGVUaW1lcQB+AAFMAA5lcXVpcG1lbnRUeXBlc3EAfgAKTAATZmFyZUFwcGxpY2F0aW9uVHlwZXQAZUxjb20vY2VuZGFudC90ZHMvc2VydmljZXMvYWNoL2FpcmNvbW1vbmFwaS9kYXRhb2JqZWN0cy9zaGFyZWQvbmV3c2tpZXMzNHgvY29tbW9uL0ZhcmVBcHBsaWNhdGlvblR5cGU7TAANZmFyZUJhc2lzQ29kZXEAfgABTAALZmFyZVNlbGxLZXlxAH4AAUwACWZsaWdodEtleXEAfgABTAAMZmxpZ2h0TnVtYmVycQB+AAFMAA5qb3VybmV5U2VsbEtleXEAfgABTAAQbWFya2V0aW5nQWlybGluZXEAfgABTAAQb3BlcmF0aW5nQWlybGluZXEAfgABTAAMcHJvZHVjdENsYXNzcQB+AAFMAApydWxlTnVtYmVycQB+AAFMAA5zZWdtZW50U2VsbEtleXEAfgABTAAGc3RhdHVzcQB+AAF4cAAAAAAAAAAAAAAACAAAAHB0AANEVUJ0ABMyMDE1LTAzLTI0VDE1OjM1OjAwcHQAAUFwcHQAEzIwMTUtMDMtMjRUMTQ6MTU6MDBzcQB+AAwAAAABdwQAAAABdAADNzM4eH5yAGNjb20uY2VuZGFudC50ZHMuc2VydmljZXMuYWNoLmFpcmNvbW1vbmFwaS5kYXRhb2JqZWN0cy5zaGFyZWQubmV3c2tpZXMzNHguY29tbW9uLkZhcmVBcHBsaWNhdGlvblR5cGUAAAAAAAAAABIAAHhyAA5qYXZhLmxhbmcuRW51bQAAAAAAAAAAEgAAeHB0AAVSb3V0ZXQABUE1TE9XdAAUMH5Bfn5BNUxPV35CTkQ1fn44flh0AB1MVE4tRFVCLTIwMTUtMDMtMjRUMTQ6MTU6MDAtQXQABCAzMzh0ADVGUn4gMzM4fiB+fkxUTn4wMy8yNC8yMDE1IDE0OjE1fkRVQn4wMy8yNC8yMDE1IDE1OjM1fnQAAkZScHQAAVJ0AARCTkQ1dAA1RlJ+IDMzOH4gfn5MVE5+MDMvMjQvMjAxNSAxNDoxNX5EVUJ+MDMvMjQvMjAxNSAxNTozNX5wc3EAfgAMAAAAAHcEAAAAAHhweHQAmWplZlVhODdNbWhJPXxxTDNhSUh5RXZudjJHa0M2VnlWMFBKSW5mNjhyeUViaXRBWElpYVlKOUdDYzhTR2x3Qzd3cmRSaDhrU2JNK1dpdlNCNWFFdVMxVWRWV2JSa2hSQjRaN2UvOStoMldZalJYZ0FTblp2cXRrUC9DZlJsT042V3ZIWTRUYm12Y3B1bVpkWWVXTWJrektnPQ==
          </com:HostToken>

          <air:SearchTraveler BookingTravelerRef="gr8AVWGCR064r57Jt0+8bA==" Code="ADT">
              <com:Name
                  xmlns:com="http://www.travelport.com/schema/common_v47_0" First="Arkajyoti" Last="Mallick" Prefix="Mr"/>
              </air:SearchTraveler>
          </air:SeatMapReq>
      </soapenv:Body>
  </soapenv:Envelope>
`;
